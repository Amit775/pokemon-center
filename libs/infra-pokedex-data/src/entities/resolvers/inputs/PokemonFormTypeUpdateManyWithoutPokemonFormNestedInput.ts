import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormTypeCreateManyPokemonFormInputEnvelope";
import { PokemonFormTypeCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormTypeCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormTypeCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypeCreateWithoutPokemonFormInput";
import { PokemonFormTypeScalarWhereInput } from "../inputs/PokemonFormTypeScalarWhereInput";
import { PokemonFormTypeUpdateManyWithWhereWithoutPokemonFormInput } from "../inputs/PokemonFormTypeUpdateManyWithWhereWithoutPokemonFormInput";
import { PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput", {})
export class PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormTypeCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypeCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  upsert?: PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypeCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  update?: PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpdateManyWithWhereWithoutPokemonFormInput], {
    nullable: true
  })
  updateMany?: PokemonFormTypeUpdateManyWithWhereWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormTypeScalarWhereInput[] | undefined;
}
