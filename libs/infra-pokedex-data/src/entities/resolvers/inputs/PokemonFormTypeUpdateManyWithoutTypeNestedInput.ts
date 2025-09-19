import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyTypeInputEnvelope } from "../inputs/PokemonFormTypeCreateManyTypeInputEnvelope";
import { PokemonFormTypeCreateOrConnectWithoutTypeInput } from "../inputs/PokemonFormTypeCreateOrConnectWithoutTypeInput";
import { PokemonFormTypeCreateWithoutTypeInput } from "../inputs/PokemonFormTypeCreateWithoutTypeInput";
import { PokemonFormTypeScalarWhereInput } from "../inputs/PokemonFormTypeScalarWhereInput";
import { PokemonFormTypeUpdateManyWithWhereWithoutTypeInput } from "../inputs/PokemonFormTypeUpdateManyWithWhereWithoutTypeInput";
import { PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput";
import { PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateManyWithoutTypeNestedInput", {})
export class PokemonFormTypeUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonFormTypeCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypeCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypeCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: PokemonFormTypeUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormTypeScalarWhereInput[] | undefined;
}
