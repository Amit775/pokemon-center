import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterOrderByWithRelationInput } from "../../../inputs/EncounterOrderByWithRelationInput";
import { EncounterWhereInput } from "../../../inputs/EncounterWhereInput";
import { EncounterWhereUniqueInput } from "../../../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
