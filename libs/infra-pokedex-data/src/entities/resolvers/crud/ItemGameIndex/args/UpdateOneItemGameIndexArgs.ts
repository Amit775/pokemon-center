import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexUpdateInput } from "../../../inputs/ItemGameIndexUpdateInput";
import { ItemGameIndexWhereUniqueInput } from "../../../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexUpdateInput, {
    nullable: false
  })
  data!: ItemGameIndexUpdateInput;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;
}
