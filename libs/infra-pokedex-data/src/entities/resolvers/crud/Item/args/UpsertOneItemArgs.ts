import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCreateInput } from "../../../inputs/ItemCreateInput";
import { ItemUpdateInput } from "../../../inputs/ItemUpdateInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemArgs {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateInput, {
    nullable: false
  })
  create!: ItemCreateInput;

  @TypeGraphQL.Field(_type => ItemUpdateInput, {
    nullable: false
  })
  update!: ItemUpdateInput;
}
