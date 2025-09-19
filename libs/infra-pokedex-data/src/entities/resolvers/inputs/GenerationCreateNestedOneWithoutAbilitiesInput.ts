import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutAbilitiesInput } from "../inputs/GenerationCreateOrConnectWithoutAbilitiesInput";
import { GenerationCreateWithoutAbilitiesInput } from "../inputs/GenerationCreateWithoutAbilitiesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutAbilitiesInput", {})
export class GenerationCreateNestedOneWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutAbilitiesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
