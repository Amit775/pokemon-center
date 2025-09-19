import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexWhereUniqueInput } from "../../../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;
}
