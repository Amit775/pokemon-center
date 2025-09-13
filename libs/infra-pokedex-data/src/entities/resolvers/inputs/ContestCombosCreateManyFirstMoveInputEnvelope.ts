import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManyFirstMoveInput } from "../inputs/ContestCombosCreateManyFirstMoveInput";

@TypeGraphQL.InputType("ContestCombosCreateManyFirstMoveInputEnvelope", {})
export class ContestCombosCreateManyFirstMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [ContestCombosCreateManyFirstMoveInput], {
    nullable: false
  })
  data!: ContestCombosCreateManyFirstMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
