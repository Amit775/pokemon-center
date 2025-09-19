import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyGenerationInputEnvelope } from "../inputs/MoveCreateManyGenerationInputEnvelope";
import { MoveCreateOrConnectWithoutGenerationInput } from "../inputs/MoveCreateOrConnectWithoutGenerationInput";
import { MoveCreateWithoutGenerationInput } from "../inputs/MoveCreateWithoutGenerationInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutGenerationInput", {})
export class MoveCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: MoveCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
