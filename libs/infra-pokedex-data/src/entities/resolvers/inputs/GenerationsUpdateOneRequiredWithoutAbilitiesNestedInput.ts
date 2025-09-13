import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutAbilitiesInput } from "../inputs/GenerationsCreateOrConnectWithoutAbilitiesInput";
import { GenerationsCreateWithoutAbilitiesInput } from "../inputs/GenerationsCreateWithoutAbilitiesInput";
import { GenerationsUpdateToOneWithWhereWithoutAbilitiesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutAbilitiesInput";
import { GenerationsUpsertWithoutAbilitiesInput } from "../inputs/GenerationsUpsertWithoutAbilitiesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutAbilitiesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutAbilitiesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutAbilitiesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutAbilitiesInput | undefined;
}
