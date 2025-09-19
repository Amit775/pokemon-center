import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutTypesInput } from "../inputs/GenerationCreateOrConnectWithoutTypesInput";
import { GenerationCreateWithoutTypesInput } from "../inputs/GenerationCreateWithoutTypesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutTypesInput", {})
export class GenerationCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutTypesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
