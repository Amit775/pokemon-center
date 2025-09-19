import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutAbilitiesInput } from "../inputs/GenerationCreateOrConnectWithoutAbilitiesInput";
import { GenerationCreateWithoutAbilitiesInput } from "../inputs/GenerationCreateWithoutAbilitiesInput";
import { GenerationUpdateToOneWithWhereWithoutAbilitiesInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutAbilitiesInput";
import { GenerationUpsertWithoutAbilitiesInput } from "../inputs/GenerationUpsertWithoutAbilitiesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutAbilitiesNestedInput", {})
export class GenerationUpdateOneRequiredWithoutAbilitiesNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutAbilitiesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutAbilitiesInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutAbilitiesInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutAbilitiesInput | undefined;
}
