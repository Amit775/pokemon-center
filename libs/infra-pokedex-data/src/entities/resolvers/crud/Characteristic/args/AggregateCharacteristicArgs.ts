import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicOrderByWithRelationInput } from "../../../inputs/CharacteristicOrderByWithRelationInput";
import { CharacteristicWhereInput } from "../../../inputs/CharacteristicWhereInput";
import { CharacteristicWhereUniqueInput } from "../../../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  where?: CharacteristicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CharacteristicOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: true
  })
  cursor?: CharacteristicWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
