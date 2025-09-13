import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyGenerationInputEnvelope } from "../inputs/TypesCreateManyGenerationInputEnvelope";
import { TypesCreateOrConnectWithoutGenerationInput } from "../inputs/TypesCreateOrConnectWithoutGenerationInput";
import { TypesCreateWithoutGenerationInput } from "../inputs/TypesCreateWithoutGenerationInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedManyWithoutGenerationInput", {})
export class TypesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;
}
