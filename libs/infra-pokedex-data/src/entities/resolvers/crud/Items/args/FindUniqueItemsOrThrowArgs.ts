import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsWhereUniqueInput } from "../../../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemsOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;
}
