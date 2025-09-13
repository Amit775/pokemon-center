import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateOrConnectWithoutSpeciesInput } from "../inputs/GrowthRatesCreateOrConnectWithoutSpeciesInput";
import { GrowthRatesCreateWithoutSpeciesInput } from "../inputs/GrowthRatesCreateWithoutSpeciesInput";
import { GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput";
import { GrowthRatesUpsertWithoutSpeciesInput } from "../inputs/GrowthRatesUpsertWithoutSpeciesInput";
import { GrowthRatesWhereUniqueInput } from "../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.InputType("GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: GrowthRatesCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: GrowthRatesCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: GrowthRatesUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: true
  })
  connect?: GrowthRatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
