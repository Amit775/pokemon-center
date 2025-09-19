import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManyFirstMoveInput } from "../inputs/SuperContestComboCreateManyFirstMoveInput";

@TypeGraphQL.InputType("SuperContestComboCreateManyFirstMoveInputEnvelope", {})
export class SuperContestComboCreateManyFirstMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateManyFirstMoveInput], {
    nullable: false
  })
  data!: SuperContestComboCreateManyFirstMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
