import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolutionInput";
import { PokemonSpeciesCreateWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput";
import { PokemonSpeciesUpsertWithoutEvolutionInput } from "../inputs/PokemonSpeciesUpsertWithoutEvolutionInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput", {})
export class PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}
