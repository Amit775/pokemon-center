import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutMovesInput } from "../inputs/GenerationCreateOrConnectWithoutMovesInput";
import { GenerationCreateWithoutMovesInput } from "../inputs/GenerationCreateWithoutMovesInput";
import { GenerationUpdateToOneWithWhereWithoutMovesInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutMovesInput";
import { GenerationUpsertWithoutMovesInput } from "../inputs/GenerationUpsertWithoutMovesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutMovesNestedInput", {})
export class GenerationUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutMovesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutMovesInput | undefined;
}
