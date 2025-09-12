import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesWhereInput } from "../../../inputs/MoveDamageClassesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;
}
