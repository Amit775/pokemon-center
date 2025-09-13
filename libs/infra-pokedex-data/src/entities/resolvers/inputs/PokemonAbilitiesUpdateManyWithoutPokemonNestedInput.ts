import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyPokemonInputEnvelope } from "../inputs/PokemonAbilitiesCreateManyPokemonInputEnvelope";
import { PokemonAbilitiesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateOrConnectWithoutPokemonInput";
import { PokemonAbilitiesCreateWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateWithoutPokemonInput";
import { PokemonAbilitiesScalarWhereInput } from "../inputs/PokemonAbilitiesScalarWhereInput";
import { PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput";
import { PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateManyWithoutPokemonNestedInput", {})
export class PokemonAbilitiesUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonAbilitiesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilitiesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilitiesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonAbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonAbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonAbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilitiesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonAbilitiesScalarWhereInput[] | undefined;
}
