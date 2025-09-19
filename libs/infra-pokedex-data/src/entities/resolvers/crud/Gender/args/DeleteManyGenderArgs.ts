import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderWhereInput } from "../../../inputs/GenderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;
}
