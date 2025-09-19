import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassUpdateManyMutationInput } from "../../../inputs/MoveDamageClassUpdateManyMutationInput";
import { MoveDamageClassWhereInput } from "../../../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveDamageClassUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;
}
