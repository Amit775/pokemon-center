import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyLocationInputEnvelope } from "../inputs/PokemonEvolutionCreateManyLocationInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutLocationInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutLocationInput";
import { PokemonEvolutionCreateWithoutLocationInput } from "../inputs/PokemonEvolutionCreateWithoutLocationInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutLocationInput", {})
export class PokemonEvolutionCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutLocationInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
