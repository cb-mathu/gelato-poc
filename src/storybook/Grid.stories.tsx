export default {
  title: 'Styles/Grid',
};

const Template = (args: any) => ({
  setup() {
    return () => (
      <div class="sb-grid" style="font-size: 12px">
        <h3>Grid Examples</h3>
        <hr />
        <div>
          <h4>Equal sized Grids</h4>
          <p class="mb-5">
            To achive equal width grid colums, just apply <b>g-grid g-grid-cols-n</b> to the parent div. This doesn't require any class for
            its children.
          </p>
          <h6>3 Colum grid</h6>
          <div class="text-center">g-grid g-grid-cols-3</div>
          <div class="g-grid g-grid-cols-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <h6>5 Colum grid</h6>
          <div class="text-center">g-grid g-grid-cols-5</div>
          <div class="g-grid g-grid-cols-5">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>
          <h6>12 Colum grid</h6>
          <div class="text-center">g-grid g-grid-cols-12</div>
          <div class="g-grid g-grid-cols-12">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
          </div>
        </div>
        <hr />
        <div>
          <h4>UnEqual sized Grids</h4>
          <p>
            To achive unequal width grid colums, apply <b>g-grid g-grid-cols-n</b> to the parent div and apply{' '}
            <b>g-col-span-x, g-col-span-y, etc</b> for children.
          </p>
          <p class="mb-5">
            Ensure <b>x+y+... = n</b>
          </p>
          <h6>12 Colum grid</h6>
          <div class="text-center">g-grid g-grid-cols-12</div>
          <div class="g-grid g-grid-cols-12">
            <div class="g-col-span-7">g-col-span-7</div>
            <div class="g-col-span-5">g-col-span-5</div>
            <div class="g-col-span-2">g-col-span-2</div>
            <div class="g-col-span-10">g-col-span-10</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
          </div>
        </div>
        <hr />
        <div>
          <h4>Responsive Grid</h4>
          <h6>
            12 Colum grid with <b>responsive classes</b>
          </h6>
          <div class="text-center">g-grid g-grid-cols-md-12 g-gap-2</div>
          <div class="g-grid g-grid-cols-md-12 g-gap-2">
            <div class="g-col-span-lg-7 g-col-span-md-6">g-col-span-lg-7 g-col-span-md-6</div>
            <div class="g-col-span-lg-5 g-col-span-md-6">g-col-span-lg-5 g-col-span-md-6</div>
            <div class="g-col-span-lg-2 g-col-span-md-3">g-col-span-lg-2 g-col-span-md-3</div>
            <div class="g-col-span-lg-10 g-col-span-md-9">g-col-span-lg-10 g-col-span-md-9</div>
            <div class="g-col-span-md-4 g-col-span-lg-5">g-col-span-md-4 g-col-span-lg-5</div>
            <div class="g-col-span-md-4 g-col-span-lg-4">g-col-span-md-4 g-col-span-lg-4</div>
            <div class="g-col-span-md-4 g-col-span-lg-3">g-col-span-md-4 g-col-span-lg-3</div>
          </div>
        </div>
        <hr />
        <div>
          <h4>Grid g-gap</h4>
          <h6>
            12 Colum grid with <b>g-gap of 0.5rem</b>
          </h6>
          <div class="text-center">g-grid g-grid-cols-12 g-gap-2</div>
          <div class="g-grid g-grid-cols-12 g-gap-2">
            <div class="g-col-span-7">g-col-span-7</div>
            <div class="g-col-span-5">g-col-span-5</div>
            <div class="g-col-span-2">g-col-span-2</div>
            <div class="g-col-span-10">g-col-span-10</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
          </div>
          <h6>
            12 Colum grid with <b>row-g-gap of 0.5rem</b>
          </h6>
          <div class="text-center">g-grid g-grid-cols-12 g-gap-y-2</div>
          <div class="g-grid g-grid-cols-12 g-gap-y-2">
            <div class="g-col-span-7">g-col-span-7</div>
            <div class="g-col-span-5">g-col-span-5</div>
            <div class="g-col-span-2">g-col-span-2</div>
            <div class="g-col-span-10">g-col-span-10</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
          </div>
          <h6>
            12 Colum grid with <b>column-g-gap of 0.5rem</b>
          </h6>
          <div class="text-center">g-grid g-grid-cols-12 g-gap-x-2</div>
          <div class="g-grid g-grid-cols-12 g-gap-x-2">
            <div class="g-col-span-7">g-col-span-7</div>
            <div class="g-col-span-5">g-col-span-5</div>
            <div class="g-col-span-2">g-col-span-2</div>
            <div class="g-col-span-10">g-col-span-10</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
            <div class="g-col-span-4">g-col-span-4</div>
          </div>
        </div>
      </div>
    );
  },
});

export const Default = Template.bind({});
