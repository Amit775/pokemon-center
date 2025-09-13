import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyNaturalGiftTypeInputEnvelope } from "../inputs/BerriesCreateManyNaturalGiftTypeInputEnvelope";
import { BerriesCreateOrConnectWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateOrConnectWithoutNaturalGiftTypeInput";
import { BerriesCreateWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateWithoutNaturalGiftTypeInput";
import { BerriesScalarWhereInput } from "../inputs/BerriesScalarWhereInput";
import { BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput } from "../inputs/BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput";
import { BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput } from "../inputs/BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput";
import { BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput } from "../inputs/BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateManyWithoutNaturalGiftTypeNestedInput", {})
export class BerriesUpdateManyWithoutNaturalGiftTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  upsert?: BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyNaturalGiftTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyNaturalGiftTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  set?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  delete?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  update?: BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  updateMany?: BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerriesScalarWhereInput[] | undefined;
}
