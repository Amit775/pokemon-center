import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesWhereInput } from "../../inputs/TypesWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonEvolutionPartyTypeArgs {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
