import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyEvolutionChainInputEnvelope } from "../inputs/PokemonSpeciesCreateManyEvolutionChainInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput";
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionChainInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutEvolutionChainInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyEvolutionChainInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyEvolutionChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
