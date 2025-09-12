import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCreateOrConnectWithoutSpeciesInput } from "../inputs/EggGroupsCreateOrConnectWithoutSpeciesInput";
import { EggGroupsCreateWithoutSpeciesInput } from "../inputs/EggGroupsCreateWithoutSpeciesInput";
import { EggGroupsUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/EggGroupsUpdateToOneWithWhereWithoutSpeciesInput";
import { EggGroupsUpsertWithoutSpeciesInput } from "../inputs/EggGroupsUpsertWithoutSpeciesInput";
import { EggGroupsWhereUniqueInput } from "../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => EggGroupsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EggGroupsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EggGroupsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: EggGroupsUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: EggGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: EggGroupsUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
