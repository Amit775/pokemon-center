import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutCharacteristicsInput } from "../inputs/StatsCreateOrConnectWithoutCharacteristicsInput";
import { StatsCreateWithoutCharacteristicsInput } from "../inputs/StatsCreateWithoutCharacteristicsInput";
import { StatsUpdateToOneWithWhereWithoutCharacteristicsInput } from "../inputs/StatsUpdateToOneWithWhereWithoutCharacteristicsInput";
import { StatsUpsertWithoutCharacteristicsInput } from "../inputs/StatsUpsertWithoutCharacteristicsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsUpdateOneRequiredWithoutCharacteristicsNestedInput", {})
export class StatsUpdateOneRequiredWithoutCharacteristicsNestedInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutCharacteristicsInput, {
    nullable: true
  })
  create?: StatsCreateWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutCharacteristicsInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpsertWithoutCharacteristicsInput, {
    nullable: true
  })
  upsert?: StatsUpsertWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateToOneWithWhereWithoutCharacteristicsInput, {
    nullable: true
  })
  update?: StatsUpdateToOneWithWhereWithoutCharacteristicsInput | undefined;
}
