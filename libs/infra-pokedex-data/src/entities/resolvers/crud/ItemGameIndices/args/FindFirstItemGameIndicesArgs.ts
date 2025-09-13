import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesOrderByWithRelationInput } from "../../../inputs/ItemGameIndicesOrderByWithRelationInput";
import { ItemGameIndicesWhereInput } from "../../../inputs/ItemGameIndicesWhereInput";
import { ItemGameIndicesWhereUniqueInput } from "../../../inputs/ItemGameIndicesWhereUniqueInput";
import { ItemGameIndicesScalarFieldEnum } from "../../../../enums/ItemGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  where?: ItemGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemGameIndicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemGameIndicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"item_id" | "generation_id" | "game_index"> | undefined;
}
