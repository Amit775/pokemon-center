import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicWhereInput } from "../../../inputs/CharacteristicWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  where?: CharacteristicWhereInput | undefined;
}
