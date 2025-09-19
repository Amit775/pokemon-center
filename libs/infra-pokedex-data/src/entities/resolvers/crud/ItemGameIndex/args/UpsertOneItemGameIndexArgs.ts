import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexCreateInput } from "../../../inputs/ItemGameIndexCreateInput";
import { ItemGameIndexUpdateInput } from "../../../inputs/ItemGameIndexUpdateInput";
import { ItemGameIndexWhereUniqueInput } from "../../../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateInput, {
    nullable: false
  })
  create!: ItemGameIndexCreateInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateInput, {
    nullable: false
  })
  update!: ItemGameIndexUpdateInput;
}
