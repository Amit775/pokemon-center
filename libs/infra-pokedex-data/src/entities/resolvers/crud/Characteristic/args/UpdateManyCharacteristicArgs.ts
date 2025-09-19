import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicUpdateManyMutationInput } from "../../../inputs/CharacteristicUpdateManyMutationInput";
import { CharacteristicWhereInput } from "../../../inputs/CharacteristicWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicUpdateManyMutationInput, {
    nullable: false
  })
  data!: CharacteristicUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  where?: CharacteristicWhereInput | undefined;
}
