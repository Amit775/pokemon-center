import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsWhereInput } from "../../../inputs/ItemsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemsArgs {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
