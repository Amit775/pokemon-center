import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderUpdateManyMutationInput } from "../../../inputs/GenderUpdateManyMutationInput";
import { GenderWhereInput } from "../../../inputs/GenderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGenderArgs {
  @TypeGraphQL.Field(_type => GenderUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;
}
