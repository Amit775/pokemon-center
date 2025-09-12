import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyGenerationInputEnvelope } from "../inputs/MovesCreateManyGenerationInputEnvelope";
import { MovesCreateOrConnectWithoutGenerationInput } from "../inputs/MovesCreateOrConnectWithoutGenerationInput";
import { MovesCreateWithoutGenerationInput } from "../inputs/MovesCreateWithoutGenerationInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutGenerationInput", {})
export class MovesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: MovesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
