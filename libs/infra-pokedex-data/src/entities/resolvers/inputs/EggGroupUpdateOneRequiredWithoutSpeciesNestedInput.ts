import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateOrConnectWithoutSpeciesInput } from "../inputs/EggGroupCreateOrConnectWithoutSpeciesInput";
import { EggGroupCreateWithoutSpeciesInput } from "../inputs/EggGroupCreateWithoutSpeciesInput";
import { EggGroupUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/EggGroupUpdateToOneWithWhereWithoutSpeciesInput";
import { EggGroupUpsertWithoutSpeciesInput } from "../inputs/EggGroupUpsertWithoutSpeciesInput";
import { EggGroupWhereUniqueInput } from "../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.InputType("EggGroupUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class EggGroupUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => EggGroupCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EggGroupCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EggGroupCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: EggGroupUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: EggGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: EggGroupUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
