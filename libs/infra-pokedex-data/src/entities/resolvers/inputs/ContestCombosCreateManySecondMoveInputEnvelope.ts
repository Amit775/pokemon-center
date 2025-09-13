import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManySecondMoveInput } from "../inputs/ContestCombosCreateManySecondMoveInput";

@TypeGraphQL.InputType("ContestCombosCreateManySecondMoveInputEnvelope", {})
export class ContestCombosCreateManySecondMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [ContestCombosCreateManySecondMoveInput], {
    nullable: false
  })
  data!: ContestCombosCreateManySecondMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
