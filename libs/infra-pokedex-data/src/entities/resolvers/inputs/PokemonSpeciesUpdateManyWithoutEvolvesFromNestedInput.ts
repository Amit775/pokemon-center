import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyEvolvesFromInputEnvelope } from "../inputs/PokemonSpeciesCreateManyEvolvesFromInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput";
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesFromInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutEvolvesFromInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyEvolvesFromInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyEvolvesFromInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
