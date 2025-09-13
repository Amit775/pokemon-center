import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyAbilityInputEnvelope } from "../inputs/PokemonAbilitiesCreateManyAbilityInputEnvelope";
import { PokemonAbilitiesCreateOrConnectWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateOrConnectWithoutAbilityInput";
import { PokemonAbilitiesCreateWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateWithoutAbilityInput";
import { PokemonAbilitiesScalarWhereInput } from "../inputs/PokemonAbilitiesScalarWhereInput";
import { PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput } from "../inputs/PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput";
import { PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput } from "../inputs/PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput";
import { PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput } from "../inputs/PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateManyWithoutAbilityNestedInput", {})
export class PokemonAbilitiesUpdateManyWithoutAbilityNestedInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateWithoutAbilityInput], {
    nullable: true
  })
  create?: PokemonAbilitiesCreateWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateOrConnectWithoutAbilityInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilitiesCreateOrConnectWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput], {
    nullable: true
  })
  upsert?: PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateManyAbilityInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilitiesCreateManyAbilityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput], {
    nullable: true
  })
  update?: PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput], {
    nullable: true
  })
  updateMany?: PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonAbilitiesScalarWhereInput[] | undefined;
}
