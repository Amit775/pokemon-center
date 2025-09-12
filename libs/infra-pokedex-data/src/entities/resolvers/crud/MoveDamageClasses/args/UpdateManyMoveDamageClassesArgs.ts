import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesUpdateManyMutationInput } from "../../../inputs/MoveDamageClassesUpdateManyMutationInput";
import { MoveDamageClassesWhereInput } from "../../../inputs/MoveDamageClassesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveDamageClassesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;
}
