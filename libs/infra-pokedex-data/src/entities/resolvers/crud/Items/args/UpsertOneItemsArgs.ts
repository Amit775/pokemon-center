import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsCreateInput } from "../../../inputs/ItemsCreateInput";
import { ItemsUpdateInput } from "../../../inputs/ItemsUpdateInput";
import { ItemsWhereUniqueInput } from "../../../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemsArgs {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateInput, {
    nullable: false
  })
  create!: ItemsCreateInput;

  @TypeGraphQL.Field(_type => ItemsUpdateInput, {
    nullable: false
  })
  update!: ItemsUpdateInput;
}
