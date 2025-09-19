import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyAbilityInputEnvelope } from "../inputs/PokemonAbilityCreateManyAbilityInputEnvelope";
import { PokemonAbilityCreateOrConnectWithoutAbilityInput } from "../inputs/PokemonAbilityCreateOrConnectWithoutAbilityInput";
import { PokemonAbilityCreateWithoutAbilityInput } from "../inputs/PokemonAbilityCreateWithoutAbilityInput";
import { PokemonAbilityScalarWhereInput } from "../inputs/PokemonAbilityScalarWhereInput";
import { PokemonAbilityUpdateManyWithWhereWithoutAbilityInput } from "../inputs/PokemonAbilityUpdateManyWithWhereWithoutAbilityInput";
import { PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput } from "../inputs/PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput";
import { PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput } from "../inputs/PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateManyWithoutAbilityNestedInput", {})
export class PokemonAbilityUpdateManyWithoutAbilityNestedInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateWithoutAbilityInput], {
    nullable: true
  })
  create?: PokemonAbilityCreateWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityCreateOrConnectWithoutAbilityInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilityCreateOrConnectWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput], {
    nullable: true
  })
  upsert?: PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateManyAbilityInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilityCreateManyAbilityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput], {
    nullable: true
  })
  update?: PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityUpdateManyWithWhereWithoutAbilityInput], {
    nullable: true
  })
  updateMany?: PokemonAbilityUpdateManyWithWhereWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonAbilityScalarWhereInput[] | undefined;
}
