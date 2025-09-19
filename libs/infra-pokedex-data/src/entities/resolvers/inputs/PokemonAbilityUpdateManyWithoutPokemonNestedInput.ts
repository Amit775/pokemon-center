import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyPokemonInputEnvelope } from "../inputs/PokemonAbilityCreateManyPokemonInputEnvelope";
import { PokemonAbilityCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonAbilityCreateOrConnectWithoutPokemonInput";
import { PokemonAbilityCreateWithoutPokemonInput } from "../inputs/PokemonAbilityCreateWithoutPokemonInput";
import { PokemonAbilityScalarWhereInput } from "../inputs/PokemonAbilityScalarWhereInput";
import { PokemonAbilityUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonAbilityUpdateManyWithWhereWithoutPokemonInput";
import { PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateManyWithoutPokemonNestedInput", {})
export class PokemonAbilityUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonAbilityCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilityCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilityCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonAbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonAbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonAbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonAbilityUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonAbilityScalarWhereInput[] | undefined;
}
