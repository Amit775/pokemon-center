import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersWhereInput } from "../../../inputs/GendersWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonEvolutionGenderArgs {
  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;
}
