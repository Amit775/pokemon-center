import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyGenerationInputEnvelope } from "../inputs/TypeCreateManyGenerationInputEnvelope";
import { TypeCreateOrConnectWithoutGenerationInput } from "../inputs/TypeCreateOrConnectWithoutGenerationInput";
import { TypeCreateWithoutGenerationInput } from "../inputs/TypeCreateWithoutGenerationInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedManyWithoutGenerationInput", {})
export class TypeCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;
}
