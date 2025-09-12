import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesUpdateInput } from "../../../inputs/MoveDamageClassesUpdateInput";
import { MoveDamageClassesWhereUniqueInput } from "../../../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateInput, {
    nullable: false
  })
  data!: MoveDamageClassesUpdateInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassesWhereUniqueInput;
}
