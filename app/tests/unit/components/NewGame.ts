import { mount } from '@vue/test-utils';
import NewGame from '@/components/NewGame.vue';

describe('/components/NewGame.vue', () => {

  it('should ask yes or no when game in progress', async () => {

    // arrange
    const gameOver = false;

    // act
    const wrapper = mount(NewGame, {
      props: { gameOver }
    });
    await wrapper.find('[data-cy="newGame"]').trigger('click');

    // assert
    expect(wrapper.emitted().click).toEqual(undefined); // not called

  });

  it('should reset game when game not in progress', async () => {

    // arrange
    const gameOver = true;

    // act
    const wrapper = mount(NewGame, {
      props: { gameOver }
    });
    await wrapper.find('[data-cy="newGame"]').trigger('click');

    // assert
    expect(wrapper.emitted().click.length).toEqual(1); // called

  });

});
