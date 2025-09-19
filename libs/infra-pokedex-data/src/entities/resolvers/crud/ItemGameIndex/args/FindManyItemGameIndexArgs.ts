import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexOrderByWithRelationInput } from "../../../inputs/ItemGameIndexOrderByWithRelationInput";
import { ItemGameIndexWhereInput } from "../../../inputs/ItemGameIndexWhereInput";
import { ItemGameIndexWhereUniqueInput } from "../../../inputs/ItemGameIndexWhereUniqueInput";
import { ItemGameIndexScalarFieldEnum } from "../../../../enums/ItemGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  where?: ItemGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"item_id" | "generation_id" | "game_index"> | undefined;
}
