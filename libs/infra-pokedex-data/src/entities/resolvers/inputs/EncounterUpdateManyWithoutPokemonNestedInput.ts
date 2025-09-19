import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyPokemonInputEnvelope } from "../inputs/EncounterCreateManyPokemonInputEnvelope";
import { EncounterCreateOrConnectWithoutPokemonInput } from "../inputs/EncounterCreateOrConnectWithoutPokemonInput";
import { EncounterCreateWithoutPokemonInput } from "../inputs/EncounterCreateWithoutPokemonInput";
import { EncounterScalarWhereInput } from "../inputs/EncounterScalarWhereInput";
import { EncounterUpdateManyWithWhereWithoutPokemonInput } from "../inputs/EncounterUpdateManyWithWhereWithoutPokemonInput";
import { EncounterUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/EncounterUpdateWithWhereUniqueWithoutPokemonInput";
import { EncounterUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/EncounterUpsertWithWhereUniqueWithoutPokemonInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateManyWithoutPokemonNestedInput", {})
export class EncounterUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: EncounterUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: EncounterUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: EncounterUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterScalarWhereInput[] | undefined;
}
