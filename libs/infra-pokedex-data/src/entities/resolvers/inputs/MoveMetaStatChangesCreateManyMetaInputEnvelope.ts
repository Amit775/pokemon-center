import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyMetaInput } from "../inputs/MoveMetaStatChangesCreateManyMetaInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateManyMetaInputEnvelope", {})
export class MoveMetaStatChangesCreateManyMetaInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateManyMetaInput], {
    nullable: false
  })
  data!: MoveMetaStatChangesCreateManyMetaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
