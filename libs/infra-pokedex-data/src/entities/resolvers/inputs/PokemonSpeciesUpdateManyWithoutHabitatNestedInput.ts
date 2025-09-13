import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyHabitatInputEnvelope } from "../inputs/PokemonSpeciesCreateManyHabitatInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutHabitatInput";
import { PokemonSpeciesCreateWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateWithoutHabitatInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutHabitatNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutHabitatNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutHabitatInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutHabitatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyHabitatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyHabitatInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
